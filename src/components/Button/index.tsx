import { IconType } from 'assets/icons';
import { Icon } from 'components/Icon';
import { useAppContext } from 'context';
import styled from 'styled-components';
import { Theme } from 'styles/theme';

type Props = {
  label?: string;
  icon?: IconType;
  title?: string;
  disabled?: boolean;
  onClick: () => void;
};

export const Button = (props: Props) => {
  const { label, icon, disabled = false, ...rest } = props;
  const { theme } = useAppContext();

  const isIconOnly = !label && Boolean(icon);

  return (
    <StyledButton
      theme={theme}
      isIconOnly={isIconOnly}
      disabled={disabled}
      {...rest}>
      {icon ? <Icon icon={icon} /> : ''}
      {label}
    </StyledButton>
  );
};

const StyledButton = styled.button<{
  theme: Theme;
  isIconOnly: boolean;
  disabled: boolean;
}>`
  height: 50px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  border: none;
  text-transform: uppercase;
  font-size: 1.3em;
  color: ${({ theme }) => theme.primaryText};
  background-color: ${({ theme, isIconOnly }) =>
    isIconOnly ? 'transparent' : theme.primaryBg};
`;
