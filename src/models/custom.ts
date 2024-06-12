import {Compose} from "./compose.ts";

export interface UserProfile {
    faceid: string,
    nickname: string,
    setting: CustomSettings,
    create_date: string
}

export interface CustomSettings {
    compose_structure: ComposeStructure;
    note: Notes;
    schedule_list: ScheduleList;
}

export interface ScheduleList {
    schedules: {
        name: string;
        content: string;
        date: number;
    }[];
}

export interface ComposeStructure {
    left: Compose[];
    right: Compose[];
}

export interface Notes {
    notes: {
        content: string;
        create_time: number;
    }[];
}
