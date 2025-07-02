
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

type Category = 'All' | 'Electronics' | 'Books' | 'Apparel';

interface ProductFilterProps {
  selectedCategory: Category;
  onCategoryChange: (category: Category) => void;
}

export function ProductFilter({ selectedCategory, onCategoryChange }: ProductFilterProps) {
  const categories: Category[] = ['All', 'Electronics', 'Books', 'Apparel'];

  return (
    <div className="flex flex-wrap gap-2 mb-8" data-testid="product-filter">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? 'default' : 'outline'}
          onClick={() => onCategoryChange(category)}
          className={cn(
            "transition-all duration-200",
            selectedCategory === category 
              ? "bg-troli-primary hover:bg-troli-secondary" 
              : "hover:bg-troli-primary/10"
          )}
          data-testid={`filter-${category.toLowerCase()}`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}
