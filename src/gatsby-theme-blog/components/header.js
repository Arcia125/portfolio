import React from 'react';
import { Link } from 'gatsby';
import { css, useColorMode, Themed } from 'theme-ui';
import Switch from './switch';
import Bio from '../components/bio';
// import sun from '../../assets/sun.png';
import sun from '../../images/sun.png';
import moon from '../../images/moon.png';

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

const iconCss = [{ pointerEvents: `none`, margin: 4 }];

const checkedIcon = (
  <img
    alt="moon indicating dark mode"
    src={moon}
    width="16"
    height="16"
    role="presentation"
    css={iconCss}
  />
);

const uncheckedIcon = (
  <img
    alt="sun indicating light mode"
    src={sun}
    width="16"
    height="16"
    role="presentation"
    css={iconCss}
  />
);

export default ({ children, title, ...props }) => {
  const [colorMode, setColorMode] = useColorMode();
  const isDark = colorMode === `dark`;
  const toggleColorMode = e => {
    setColorMode(isDark ? `light` : `dark`);
  };

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
          <Switch
            aria-label="Toggle dark mode"
            checkedIcon={checkedIcon}
            uncheckedIcon={uncheckedIcon}
            checked={isDark}
            onChange={toggleColorMode}
          />
        </div>
        {props.location.pathname === rootPath && <Bio />}
      </div>
    </header>
  );
};
