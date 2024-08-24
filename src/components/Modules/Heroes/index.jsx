import EachUtils from "../../../utils/EachUtils";
import HeroContent from "../Elements/HeroContent";

import {
  LIST_CONTENT_1,
  LIST_CONTENT_2,
  LIST_CONTENT_3,
} from "../../../constants/listHero";

const Heroes = () => {
  return (
    <section className="flex flex-col gap-2">
      {/* Hero-1 */}
      <EachUtils
        of={LIST_CONTENT_1}
        render={(item, index) => (
          <HeroContent index={index} item={item} pt="pt-24" />
        )}
      />

      {/* Hero-2 */}
      <EachUtils
        of={LIST_CONTENT_2}
        render={(item, index) => (
          <HeroContent index={index} item={item} pt="pt-10" />
        )}
      />

      {/* Hero-3 */}
      <EachUtils
        of={LIST_CONTENT_3}
        render={(item, index) => (
          <HeroContent index={index} item={item} pt="pt-10" />
        )}
      />
    </section>
  );
};

export default Heroes;
