import Dexie, { type Table } from 'dexie';

// 1. Initialise Dexie database
export interface Chat {
	id: string;
	title: string;
	createdAt: Date;
}
export interface Message {
	id: string;
	chatId: string;
	content: string;
	role: 'user' | 'assistant' | 'system';
	createdAt: Date;
}

class AppDB extends Dexie {
	chats!: Table<Chat, string>;
	messages!: Table<Message, string>;

	constructor() {
		super('Ultramarine');
		this.version(1).stores({
			chats: 'id, createdAt',
			messages: 'id, chatId, createdAt'
		});
	}
}

export const db = new AppDB();
