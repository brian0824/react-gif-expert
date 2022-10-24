import PropTypes from "prop-types";
export const GifGridItem = ({ title, url, id }) => {
  console.log(title, url);
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
GifGridItem.proppTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
/**
 * 1añadir propTypes ?? yarn add
 *   a.title obligatorio
 *   b.url obligatorio
 * 2.evalual el snapshot
 */
