import React from "react";

const ServiceCard = ({
  id,
  title,
  description,
}: {
  id: number;
  title: string;
  description: string;
}) => {
  return (
    <div className="flex flex-col gap-2">
      {/* <div className="bg-muted rounded-md aspect-video mb-2"></div> */}
      <h3 className="text-xl tracking-tight">{title}</h3>
      <p className="text-muted-foreground text-base">{description}</p>
    </div>
  );
};

export default ServiceCard;
