import './BreadcrumbsNew.css';
import { useMatches, Link } from 'react-router-dom';
import { categorys } from '../../utils/categorys';
import { initialCollections } from '../../utils/collections';
import { infocenter } from '../../utils/infocenter';

const BreadcrumbsNew = () => {
  const matches = useMatches();

  const crumbsData = matches.filter((match) => Boolean(match.handle));

  const breadcrumbs = crumbsData.map((match, index) => {
    const isLast = index === crumbsData.length - 1;

    const handleData = match.handle.breadcrumb(match.data);

    // console.log(match.params.subsection);

    const getInfoSectionName = () => {
      const infoSection = infocenter.find(
        (i) => i.subsection === match.params.subsection
      ).subsection;
      if (infoSection === 'news') return 'Новости';
      if (infoSection === 'events') return 'Мероприятия';
      if (infoSection === 'articles') return 'Статьи';
    };

    let crumb;

    switch (true) {
      case handleData === 'Категория':
        crumb = categorys.find((i) => i.path === match.params.category)?.name;
        break;
      case handleData === 'Коллекция':
        crumb = initialCollections.find(
          (i) => i.url === match.params.collection
        )?.name;
        break;
      case handleData === 'Инфораздел':
        crumb = getInfoSectionName();
        break;
      case handleData === 'Контент':
        crumb = infocenter.find(
          (i) => i?.subsection === match.params.subsection
        )?.title;
        break;

      default:
        crumb = handleData;
    }

    return (
      <span key={match.pathname}>
        {isLast ? (
          <span>{crumb}</span>
        ) : (
          <Link to={match.pathname}>{crumb}</Link>
        )}
        {!isLast && ' > '}
      </span>
    );
  });

  return <nav className="breadcrumbs-new">{breadcrumbs}</nav>;
};

export default BreadcrumbsNew;
