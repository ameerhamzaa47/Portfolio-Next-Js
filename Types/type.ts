export default interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
}


export interface ProjectCardProps {
    imgUrl: string;
    title: string;
    description: string;
    gitUrl: string;
    PreviewUrl: string;
  }

  export interface ProjectTagButtonProps {
    name: string;
    onClick: (name: string) => void;
    isSelected: boolean;
  }