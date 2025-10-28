// src/hedera.d.ts

interface HashPackConnectionResult {
    accountId: string;
    publicKey?: string;
    network?: string;
}

interface HashPackProvider {
    requestAccountId(): Promise<HashPackConnectionResult>;
    disconnect(): Promise<void>;
}

interface Window {
    hashpack?: HashPackProvider;
}

export { };