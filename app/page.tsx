import Trending from "app/(home)/Trending";
import Tech from "app/(home)/Tech";
import Travel from "app/(home)/Travel";
import Other from "app/(shared)/Other";
import Subscribe from "app/(shared)/Subscribe";
import SideBar from "app/(shared)/SideBar";

export default function Home() {
  return (
    <main className="px-10 leading-7">
      {/* 트렌드 */}
      <Trending />
      {/* 트렌드 */}
      <div className="md:flex gap-10 mb-5">
        <div className="basis-3/4">
          <Tech />
          <Travel />
          <Other />

          <div className="hidden md:block">
            <Subscribe />
          </div>
        </div>
        {/* 사이드 바 */}
        <div className="basis-1/4">
          <SideBar />
        </div>
        {/* 사이드 바 */}
      </div>
    </main>
  );
}
{
  /* <main className="flex min-h-screen flex-col items-center justify-between p-24"></main> */
}
