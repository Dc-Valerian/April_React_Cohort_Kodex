import React from "react";
import CardProps from "../CardProps/CardProps";

const CardSection = () => {
  return (
    <div className="flex items-center justify-between flex-wrap">
      <CardProps
        image="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        h3="Valerian Pedro"
        p="Full stack web developer"
        bgColor="red"
      />

      <CardProps
        image="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        h3="AdaChuwkwu Priscilla"
        p="Full stack web developer"
        bgColor="yellow"
      />

      <CardProps
        image="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        h3="David Okafor"
        p="Full stack web developer"
        bgColor="blue"
      />

      <CardProps
        image="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        h3="Capacity Onyi"
        p="Full stack web developer"
        bgColor="purple"
      />

      <CardProps
        image="https://plus.unsplash.com/premium_photo-1689568126014-06fea9d5d341?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        h3="Emmanuel Okonwko"
        p="Full stack web developer"
        bgColor="green"
      />

      <CardProps
        image="https://images.unsplash.com/photo-1511367461989-f85a21fda167?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        h3="Valerian Pedro"
        p="Full stack web developer"
        bgColor="cyan"
      />
    </div>
  );
};

export default CardSection;
