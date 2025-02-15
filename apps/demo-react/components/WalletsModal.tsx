import { WalletsModalForEth } from 'reef-knot/connect-wallet-modal';
import metrics from '../util/metrics';

export default function WalletsModal(props: {
  open: boolean;
  handleClose: () => void;
  isDarkTheme: boolean;
}) {
  const { open, isDarkTheme, handleClose } = props;

  return (
    <WalletsModalForEth
      open={open}
      onClose={handleClose}
      metrics={metrics}
      shouldInvertWalletIcon={isDarkTheme}
    />
  );
}
