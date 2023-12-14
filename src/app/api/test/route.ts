import { NextResponse } from "next/server";
import { Database } from "sqlite3";

export async function GET(req: Request, res: Response) {
    const db = new Database('./dupa.db');
    const characters = await new Promise((resolve, reject) => {
        db.all('SELECT * FROM Characters', (err, row) => {
            if (err) reject(err);
            else resolve(row);
        });
    });

    db.close();
    console.log(characters)

    return NextResponse.json(characters)
}