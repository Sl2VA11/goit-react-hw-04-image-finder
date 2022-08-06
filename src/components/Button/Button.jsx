import css from './Button.module.css'
export default function Button({ onLoadMore }) {
  return (
    <div className={css.btnWrap}>
      <button className={css.btn} onClick={onLoadMore} >
        Load More
      </button>
    </div>
  );
}