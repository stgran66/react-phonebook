import { Outlet } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';
import { Suspense } from 'react';
import {
  Container,
  MainHeading,
  Content,
  MessageContainer,
} from './Common.styled';

export const Layout = () => {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
