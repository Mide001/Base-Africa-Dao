import { http, cookieStorage, createConfig, createStorage } from "wagmi";
import { base } from "wagmi/chains";
import { coinbaseWallet } from "wagmi/connectors";


export function getConfig() {
    return createConfig({
        chains: [base],
        connectors: [
            coinbaseWallet({
                appName: "Base Nigeria Idea Launchpad",
                preference: 'smartWalletOnly',
                version: '4',
            }),
        ],
        storage: createStorage({
            storage: cookieStorage,
        }),
        ssr: true,
        transports: {
            [base.id]: http(),
        },
    });
}

declare module 'wagmi' {
    interface Register {
        config: ReturnType<typeof getConfig>;
    }
}