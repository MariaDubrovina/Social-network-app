import React, { Suspense } from 'react';
import Preloader from '../Components/Common/Preloader/Preloader';


export const withReactSuspense = (Component) => {
  let ReactSuspenseComponent = (props) => {

    return <Suspense fallback={<div><Preloader /></div>}>
      <Component {...props} />
    </Suspense>

  }

  return ReactSuspenseComponent;
}