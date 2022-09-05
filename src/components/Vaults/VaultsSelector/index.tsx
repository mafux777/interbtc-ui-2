import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/solid';
import { CurrencyExt } from '@interlay/interbtc-api';
import clsx from 'clsx';
import { useTranslation } from 'react-i18next';

import { VaultApiType } from '@/common/types/vault.types';
import { displayMonetaryAmount, shortAddress } from '@/common/utils/utils';
import { KUSAMA, POLKADOT } from '@/utils/constants/relay-chain-names';
import { useGetCurrencies } from '@/utils/hooks/api/use-get-currencies';

import Select, {
  SELECT_VARIANTS,
  SelectBody,
  SelectButton,
  SelectCheck,
  SelectLabel,
  SelectOption,
  SelectOptions,
  SelectText
} from '../../Select';

interface Props {
  vaults: VaultApiType[];
  label: string;
  onChange: (vault: VaultApiType) => void;
  selectedVault: VaultApiType | undefined;
  isPending: boolean;
  error?: boolean;
}

interface VaultOptionProps {
  vault: VaultApiType | undefined;
  error?: boolean;
  getForeignCurrencyById: (id: number) => CurrencyExt;
}
const VaultOption = ({ vault, error, getForeignCurrencyById }: VaultOptionProps): JSX.Element => {
  const { t } = useTranslation();
  console.log(vault);
  if (!vault) {
    return t('select_vault');
  }

  const getCurrencyTicker = (vault: VaultApiType): string => {
    const collateralCurrency = vault[0].currencies.collateral;
    if (collateralCurrency.isToken) {
      return collateralCurrency.asToken.toString();
    }
    return getForeignCurrencyById(collateralCurrency.asForeignAsset.toNumber()).ticker;
  };

  return (
    <div className={clsx('flex', 'items-center')}>
      {error ? (
        <XCircleIcon
          className={clsx(
            'flex-shrink-0',
            'w-4',
            'h-4',
            'mr-2',
            { 'text-interlayCinnabar': process.env.REACT_APP_RELAY_CHAIN_NAME === POLKADOT },
            { 'text-kintsugiThunderbird': process.env.REACT_APP_RELAY_CHAIN_NAME === KUSAMA }
          )}
        />
      ) : (
        <CheckCircleIcon className={clsx('flex-shrink-0', 'w-4', 'h-4', 'mr-2', 'text-interlayConifer-600')} />
      )}
      <SelectText className={clsx('w-44', 'font-bold')}>{shortAddress(vault[0].accountId.toString())}</SelectText>
      <SelectText className='w-16'>{getCurrencyTicker(vault)}</SelectText>
      <SelectText>
        <strong>{displayMonetaryAmount(vault[1])}</strong> BTC
      </SelectText>
    </div>
  );
};

const VaultSelector = ({ label, vaults, onChange, selectedVault, isPending, error }: Props): JSX.Element => {
  const { t } = useTranslation();
  const { isLoading: isLoadingCurrencies, getForeignCurrencyById } = useGetCurrencies(true);

  const isLoading = isPending || isLoadingCurrencies;
  return (
    <Select variant={SELECT_VARIANTS.formField} value={selectedVault} onChange={onChange}>
      {({ open }) => (
        <>
          <SelectLabel className='sr-only'>{label}</SelectLabel>
          <SelectBody>
            <SelectButton variant={SELECT_VARIANTS.formField} error={!!error}>
              <span className={clsx('flex', 'justify-between', 'py-2')}>
                {isLoading ? (
                  t('loading_ellipsis')
                ) : vaults.length > 0 ? (
                  <VaultOption vault={selectedVault} error={error} getForeignCurrencyById={getForeignCurrencyById} />
                ) : (
                  t('not_enough_vault_capacity')
                )}
              </span>
            </SelectButton>
            <SelectOptions className='h-28' open={open}>
              {!isLoading &&
                vaults.map((vault: VaultApiType) => {
                  return (
                    <SelectOption key={vault[0].toString()} value={vault}>
                      {({ selected, active }) => (
                        <span className={clsx('flex', 'justify-between', 'mr-4')}>
                          <VaultOption vault={vault} getForeignCurrencyById={getForeignCurrencyById} />
                          {selected ? <SelectCheck active={active} /> : null}
                        </span>
                      )}
                    </SelectOption>
                  );
                })}
            </SelectOptions>
          </SelectBody>
        </>
      )}
    </Select>
  );
};

export default VaultSelector;
