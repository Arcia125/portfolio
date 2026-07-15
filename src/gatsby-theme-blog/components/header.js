import React from 'react';
import { Link } from 'gatsby';
import { css, Themed } from 'theme-ui';
import Bio from '../components/bio';
import { ThemeToggle } from '../../components/theme-toggle';

const rootPath = `${__PATH_PREFIX__}/`;

const Title = ({ children, location }) => {
  if (location.pathname === rootPath) {
    return (
      <Themed.h1
        css={css({
          my: 0,
          fontSize: 4,
        })}
      >
        <Themed.a
          as={Link}
          css={css({
            color: `inherit`,
            boxShadow: `none`,
            textDecoration: `none`,
          })}
          to={`/`}
        >
          {children}
        </Themed.a>
      </Themed.h1>
    );
  } else {
    return (
      <Themed.h3
        as="p"
        css={css({
          my: 0,
        })}
      >
        <Themed.a
          as={Link}
          css={css({
            boxShadow: `none`,
            textDecoration: `none`,
            color: `primary`,
          })}
          to={`/`}
        >
          {children}
        </Themed.a>
      </Themed.h3>
    );
  }
};

export default ({ children, title, ...props }) => {
  return (
    <header>
      <div
        css={css({
          maxWidth: `container`,
          mx: `auto`,
          px: 3,
          pt: 4,
        })}
      >
        <div
          css={css({
            display: `flex`,
            justifyContent: `space-between`,
            alignItems: `center`,
            mb: 4,
          })}
        >
          <Title {...props}>{title}</Title>
          {children}
          <ThemeToggle />
        </div>
        {props.location.pathname === rootPath && <Bio />}
      </div>
    </header>
  );
};
