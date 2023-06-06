import React from "react";

export type SidebarProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLElement>;

const Sidebar = ({ children, className, ...rest }: SidebarProps) => {
  return (
    <aside className={className} {...rest}>
      {children}
    </aside>
  );
};

export default Sidebar;
