import { Star } from "lucide-react";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

const TestimonialCard = ({ name, role, content, rating, image }: TestimonialCardProps) => {
  return (
    <div className="bg-card rounded-xl border border-border p-6 space-y-4 hover:shadow-md transition-shadow">
      {/* Rating Stars */}
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${i < rating ? "fill-yellow-400 text-yellow-400" : "text-muted"}`}
          />
        ))}
      </div>

      {/* Testimonial Content */}
      <p className="text-sm text-muted-foreground leading-relaxed">{content}</p>

      {/* Author Info */}
      <div className="flex items-center space-x-3 pt-4 border-t border-border">
        {image ? (
          <img src={image} alt={name} className="h-12 w-12 rounded-full object-cover" />
        ) : (
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <span className="text-lg font-semibold text-primary">{name.charAt(0)}</span>
          </div>
        )}
        <div>
          <h4 className="text-sm font-semibold text-foreground">{name}</h4>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
