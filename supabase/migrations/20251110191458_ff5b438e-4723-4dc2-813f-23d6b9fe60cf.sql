-- Create profiles table
create table public.profiles (
  id uuid not null references auth.users(id) on delete cascade primary key,
  full_name text,
  phone text,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now()
);

-- Enable RLS
alter table public.profiles enable row level security;

-- Profiles policies
create policy "Users can view their own profile"
  on public.profiles for select
  using (auth.uid() = id);

create policy "Users can insert their own profile"
  on public.profiles for insert
  with check (auth.uid() = id);

create policy "Users can update their own profile"
  on public.profiles for update
  using (auth.uid() = id);

-- Create appointments table
create table public.appointments (
  id uuid not null default gen_random_uuid() primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  doctor_name text not null,
  doctor_specialty text not null,
  appointment_date date not null,
  appointment_time time not null,
  reason text,
  status text not null default 'scheduled',
  queue_number integer,
  created_at timestamp with time zone not null default now(),
  updated_at timestamp with time zone not null default now()
);

-- Enable RLS
alter table public.appointments enable row level security;

-- Appointments policies
create policy "Users can view their own appointments"
  on public.appointments for select
  using (auth.uid() = user_id);

create policy "Users can create their own appointments"
  on public.appointments for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own appointments"
  on public.appointments for update
  using (auth.uid() = user_id);

create policy "Users can delete their own appointments"
  on public.appointments for delete
  using (auth.uid() = user_id);

-- Trigger for updating updated_at on profiles
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql security definer set search_path = public;

create trigger set_profiles_updated_at
  before update on public.profiles
  for each row
  execute function public.handle_updated_at();

create trigger set_appointments_updated_at
  before update on public.appointments
  for each row
  execute function public.handle_updated_at();

-- Trigger to create profile on user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name)
  values (new.id, new.raw_user_meta_data->>'full_name');
  return new;
end;
$$ language plpgsql security definer set search_path = public;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();