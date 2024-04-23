import {Compose} from "./compose.ts";

export interface UserProfile {
    faceid: string,
    nickname: string,
    setting: CustomSettings,
    create_date: string
}

export interface CustomSettings {
    compose_structure: ComposeStructure;
}

export interface ComposeStructure {
    left: Compose[];
    right: Compose[];
}