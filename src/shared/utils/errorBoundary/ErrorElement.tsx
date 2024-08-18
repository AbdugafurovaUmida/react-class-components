import { FC } from 'react';

interface ErrorElementProps {
  errorInfo?: string | null;
}

const ErrorElement: FC<ErrorElementProps> = ({ errorInfo }) => {
  return (
    <div>
      <h1>Somethig went wrong!</h1>
      {errorInfo && <p>{errorInfo}</p>}
      <button onClick={() => location.reload()}>Reload</button>
    </div>
  );
};

export { ErrorElement };
