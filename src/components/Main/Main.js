import './Main.css';
import SliderPauseOnHover from '../Slider/SliderPauseOnHover';
import Section from '../Section/Section';
import InfoCenter from '../InfoCenter/InfoCenter';
import PromoSection from '../PromoSection/PromoSection';
import { categorys } from '../../utils/categorys';
import { collections } from '../../utils/collections';

function Main() {
  const filteredList = (caption) => {
    return collections.filter((collection) =>
      collection.category.some((value) => value === caption)
    );
  };

  return (
    <div className="Main">
      <SliderPauseOnHover />
      <Section
        caption={categorys[0].name}
        list={filteredList(categorys[0].name)}
        section_url={categorys[0].path}
      />
      <Section
        caption={categorys[1].name}
        list={filteredList(categorys[1].name)}
        section_url={categorys[1].path}
      />
      <Section
        caption={categorys[2].name}
        list={filteredList(categorys[2].name)}
        section_url={categorys[2].path}
      />
      <PromoSection />
      <InfoCenter />
    </div>
  );
}

export default Main;
