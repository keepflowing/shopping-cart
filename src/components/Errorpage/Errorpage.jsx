import style from './Errorpage.module.css';

export default function Errorpage() {
  return (
    <div className={style.container}>
      <h1>404 - Page not found</h1>
      <p>Redirecting to previous page...</p>
    </div>
  );
}
