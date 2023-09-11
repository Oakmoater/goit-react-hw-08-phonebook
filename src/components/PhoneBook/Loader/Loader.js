import { theme } from 'components/UI/Themes/theme';
import { PulseLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <PulseLoader
      color={theme.colors.secondary}
      cssOverride={{
        textAlign: 'center',
      }}
      margin={15}
      size={12}
    />
  );
};
