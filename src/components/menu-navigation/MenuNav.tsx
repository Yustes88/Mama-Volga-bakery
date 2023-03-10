import { MenuItem } from "../../types/types";

type MenuNavProps = {
  data: MenuItem[];
};

function MenuNav({ data }: MenuNavProps) {
  return (
    <>
      {data.map((item) => {
        if(item.title === 'Меню') return '';
        
        return (
          <div className="relative sm:max-w-xl sm:mx-auto" key={item.title}>
            <a
              href={item.src}
              className="text-base max-w-sm font-medium text-brown leading-tight"
              key={item.title}
            >
              <span className="link link-underline link-underline-brown">
                {item.title}
              </span>
            </a>
          </div>
        );
      })}
    </>
  );
}

export default MenuNav;
