export interface CategorItem {
    name: string;
    path: string;
    _id: string;
    icon?: string;
  }


export interface CategorItemProps {
    items: CategorItem[];
    className?: string;
}