import { EndpointId } from '@layerzerolabs/lz-definitions'

import type { OAppOmniGraphHardhat, OmniPointHardhat } from '@layerzerolabs/toolbox-hardhat'

const ethereumContract: OmniPointHardhat = {
    eid: EndpointId.ETHEREUM_V2_MAINNET,
    contractName: 'BAYCOFTAdapter',
}

const apeContract: OmniPointHardhat = {
    eid: EndpointId.APE_V2_MAINNET,
    contractName: 'BAYC',
}

const ethNativeApeContract: OmniPointHardhat = {
    eid: EndpointId.ETHEREUM_V2_MAINNET,
    contractName: 'APE',
}

const ApeNativeApeContract: OmniPointHardhat = {
    eid: EndpointId.APE_V2_MAINNET,
    contractName: 'APE',
}

const config: OAppOmniGraphHardhat = {
    contracts: [
        {
            contract: ethereumContract,
        },
        {
            contract: apeContract,
        },
    ],
    connections: [
        {
            from: ethereumContract,
            to: apeContract,
        },
        {
            from: apeContract,
            to: ethereumContract,
        },
    ],
}

export default config
