import React, {Fragment} from 'react';
import cn from 'classnames';
import Svg from '@aetnadigital/anatomy/Svg';
import styles from './button.css';

const ButtonContent = ({
  icon,
  iconplacement = 'left',
  appearance,
  fullwidth,
  isloading,
}) => {

  const renderIcon = () => (
    <Svg
      name={isloading ? 'anatomy-loading' : icon}
      color={appearance === 'primary' ? 'white' : 'primary-brand'}
      size={appearance === 'iconOnly' ? 'lg' : 'md'}
    />
  );

  return (
    <Fragment>
      <link href="./anatomy.css" rel="stylesheet" />
      <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{position: 'absolute', width: 0, height: 0}} id="__SVG_SPRITE_NODE2__">
        <symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 22" id="anatomy-stethoscope"><title>icons_stethoscope</title><path data-name="stethoscope-path" d="M16.503 17.365a1.344 1.344 0 0 1-.616.843 1.415 1.415 0 0 1-1.05.17h-.001a1.365 1.365 0 0 1-.858-.604 1.349 1.349 0 0 1 .443-1.876 1.41 1.41 0 0 1 .733-.206 1.489 1.489 0 0 1 .317.035 1.363 1.363 0 0 1 1.032 1.638M4.318 10.139a4.073 4.073 0 0 0 1.049.136 4.582 4.582 0 0 0 .706-.06c-.634.903-1.334 1.75-2.023 1.61-.758-.149-.905-.803-1.033-2.334a4.082 4.082 0 0 0 1.301.648m12.635 4.76c.601-1.473 1.306-4.014.49-5.84a3.22 3.22 0 0 0-2.253-1.834c-3.314-.829-4.557 3.36-5.65 7.052-.758 2.56-1.617 5.461-2.98 6.136a1.686 1.686 0 0 1-1.389.004c-2.332-.848-1.316-5.21-.727-7.163 1.4-.133 2.367-1.531 3.16-2.697a5.38 5.38 0 0 1 1.114-1.362l-.02-.037c2.51-1.562 3.942-3.635 3.645-5.32a2.808 2.808 0 0 0-2.365-2.163 1.16 1.16 0 1 0-.962 1.786 1.177 1.177 0 0 0 .82-.33c.621.2.99.515 1.067.952.164.929-.853 2.581-3.112 3.944a4.052 4.052 0 0 1-3.089.726 3.632 3.632 0 0 1-2.128-1.96C1.299 4.445 1.22 2.503 1.8 1.8a1.325 1.325 0 0 1 1.324-.297 1.17 1.17 0 0 0 2.283-.348A1.155 1.155 0 0 0 3.679.152 2.797 2.797 0 0 0 .665.895c-1.034 1.25-.845 3.662.442 6.214l-.003.002a6.96 6.96 0 0 1 .442 2.342c.104 1.286.237 2.83 1.465 3.503-1.41 4.711-.822 7.907 1.654 8.807A3.651 3.651 0 0 0 5.918 22a2.896 2.896 0 0 0 1.3-.305c1.931-.957 2.802-3.9 3.725-7.017 1.17-3.956 2.07-6.514 3.887-6.061a1.74 1.74 0 0 1 1.274 1.02c.556 1.245.06 3.317-.485 4.668a2.866 2.866 0 0 0-1.967.37 2.771 2.771 0 0 0-.916 3.854 2.805 2.805 0 0 0 1.771 1.248 2.96 2.96 0 0 0 .652.073 2.878 2.878 0 0 0 1.498-.42 2.76 2.76 0 0 0 .296-4.532" fillRule="evenodd"></path></symbol>
      </svg>
      {((icon || isloading) && iconplacement === 'left') && renderIcon()}
      {appearance !== 'iconOnly' && <slot />}
      {((icon || isloading) && iconplacement === 'right') && renderIcon()}
      <style>{styles}</style>
    </Fragment>
  );
};

export default ButtonContent;
