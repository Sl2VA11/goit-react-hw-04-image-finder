import { Circles } from 'react-loader-spinner';
import css from './Loader.css'
export default function ImagePendingView() {
   return (
      <div className={css.loadwrap}>
         <Circles color="#00BFFF" height={100} width={100} />;
      </div>
         

   )
}
