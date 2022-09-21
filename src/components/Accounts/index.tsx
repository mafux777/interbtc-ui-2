import * as React from 'react';

// ray test touch <
import { _KeyringPair, useSubstrateSecureState } from '@/substrate-lib/substrate-context';

// ray test touch >
import AccountSelector from './AccountSelector';

interface Props {
  callbackFunction?: (account: _KeyringPair) => void;
  label: string;
}

const Accounts = ({ callbackFunction, label }: Props): JSX.Element => {
  const { selectedAccount: currentAccount, accounts } = useSubstrateSecureState();

  const [selectedAccount, setSelectedAccount] = React.useState<_KeyringPair | undefined>(undefined);

  React.useEffect(() => {
    if (!currentAccount) return;

    if (!selectedAccount) {
      setSelectedAccount(currentAccount);
    }

    if (callbackFunction && selectedAccount) {
      callbackFunction(selectedAccount);
    }
  }, [callbackFunction, currentAccount, selectedAccount]);

  return (
    <div>
      {accounts && selectedAccount ? (
        <AccountSelector
          label={label}
          accounts={accounts}
          selectedAccount={selectedAccount}
          onChange={setSelectedAccount}
        />
      ) : null}
    </div>
  );
};

export default Accounts;
