import React from "react";
import { FormGroup, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { StoreType } from "../../../common/types/util.types";
import { remove0x, shortAddress } from "../../../common/utils/utils";

type VaultInfoProps = {
    closeModal: () => void
}

export default function VaultInfo(props: VaultInfoProps) {
    const vaultDotAddress = useSelector((state: StoreType) => state.redeem.vaultDotAddress);
    const vaultBtcAddress = useSelector((state: StoreType) => state.redeem.vaultBtcAddress);

    const onConfirm = () => {
        props.closeModal();
    }

    return <React.Fragment>
        <Modal.Body>
            <FormGroup>
                <h5>Request being processed...</h5>
                <p>
                    Your redeem request is being processed by Vault:
                    <b>{shortAddress(vaultDotAddress)}</b>
                </p>
                <p>
                    You will receive BTC from the following Bitcoin address:
                    <b>{remove0x(vaultBtcAddress)}</b>
                </p>
                <p>
                    We will inform you when your redeem request has been executed.
                </p>
            </FormGroup>
        </Modal.Body>
        <Modal.Footer>
            <button className="btn btn-primary float-right" onClick={onConfirm}>
                Finish
            </button>
        </Modal.Footer>
    </React.Fragment>
}