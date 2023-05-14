import React from "react";
import Card from "./Card";

interface OtherProps {}
const Other: React.FC<OtherProps> = () => {
  return (
    <section className="pt-4 mb-16">
      <hr className="border-1" />
      {/* Header */}
      <p className="font-bold text-2xl my-8">Other Trending Posts</p>
      <div className="sm:grid grid-cols-2 gap-16">
        <Card className="bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
        <Card className="bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
        <Card className="bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
        <Card className="bg-wh-500 mt-5 sm:mt-0" imageHeight="h-80" />
      </div>
    </section>
  );
};
export default Other;
