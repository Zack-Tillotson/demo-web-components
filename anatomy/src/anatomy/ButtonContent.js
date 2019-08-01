import React, {Fragment} from 'react';
import cn from 'classnames';
import Svg from '../Svg';
import styles from './button.css';

const ButtonContent = ({
  icon,
  iconplacement,
  appearance,
  fullwidth,
}) => {

  const renderIcon = () => (
    <Svg
      className={cn({
        [styles.loadingAnimation]: isLoading,
        [styles.iconLeft]: iconPlacement === 'left' && appearance !== 'iconOnly',
        [styles.iconRight]: iconPlacement === 'right' && appearance !== 'iconOnly',
      })}
      name={isLoading ? 'anatomy-loading' : icon}
      ariaHidden={(icon && children) && 'true'}
      color={appearance === 'primary' ? 'white' : 'primary-brand'}
      size={appearance === 'iconOnly' ? 'lg' : 'md'}
    />
  );


  return (
    <Fragment>
      {((icon || isloading) && iconplacement === 'left') && renderIcon()}
      {appearance !== 'iconOnly' && children}
      {((icon || isLoading) && iconPlacement === 'right') && renderIcon()}
      <style>{styles}</style>
    </Fragment>
  );
};

export default Button;