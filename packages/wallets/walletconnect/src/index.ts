import { WalletAdapterType } from '@reef-knot/types';
import { getWalletConnectConnector } from '@reef-knot/wallets-helpers';
import WalletIcon from './icons/wallet-connect-circle.svg';

export const WalletConnect: WalletAdapterType = ({
  walletconnectProjectId,
  chains,
}) => ({
  walletName: 'WalletConnect',
  walletId: 'walletconnect',
  icon: WalletIcon,
  connector: getWalletConnectConnector({
    chains,
    projectId: walletconnectProjectId,
  }),
});
