import React, { type ErrorInfo, type ReactNode, Suspense } from 'react';
import { ErrorPage } from 'widgets/ErrorPage';

type ErrorBoundaryProps = {
   children: ReactNode;
};

type ErrorBoundaryState = {
   hasError: boolean;
};

class Component
   extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
   constructor(props: ErrorBoundaryProps) {
      super(props);
      this.state = { hasError: false };
   }

   // eslint-disable-next-line @typescript-eslint/member-ordering
   // eslint-disable-next-line @typescript-eslint/no-unused-vars
   static getDerivedStateFromError(error: Error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
   }

   componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      // You can also log the error to an error reporting service
      console.log(error, errorInfo);
   }

   render() {
      const { hasError } = this.state;
      const { children } = this.props;

      if (hasError) {
      // You can render any custom fallback UI
         return (
            <Suspense fallback=''>
               <ErrorPage />
            </Suspense>
         );
      }

      return children;
   }
}

export const ErrorBoundary = Component;
