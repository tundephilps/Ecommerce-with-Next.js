export interface Product {
  _id: number;
  title: string;
  description: string;
  oldPrice: number;
  price: number;
  brand: string;
  image: string;
  isNew: boolean;
  category: string;
}

export interface Item {
  _id: number;
  title: string;
  description: string;
  oldPrice: number;
  price: number;
  brand: string;
  image: string;
  isNew: boolean;
  category: string;
}
/*type WrapperProps = {
  pageIndex: number;
  children: React.ReactNode;
  className?: string;
};
type NavLink = {
  path: string;
  label: string;
};

type Skills = {
  name: string;
  level: number;
};
type SkillBarProps = {
  skills: Skills[];
};
type ProjectProps = {
  id: number;
  img: string;
  name: string;
  tools: string[];
  link: string;
  github: string;
};
type CountUpProps = {
  start: number;
  end: number;
  duration: number;
};
type countUpItemsProps = {
  id: number;
  number: number;
  text: string;
};

type ServiceProps = {
  id: number;
  title: string;
  icon: React.ReactNode;
  finished: number;
};

type ContactsProps = {
  id: number;
  title: string;
  text: string;
};

export {
  WrapperProps,
  CountUpProps,
  NavLink,
  SkillBarProps,
  countUpItemsProps,
  ProjectProps,
  ServiceProps,
  ContactsProps,
};
*/
