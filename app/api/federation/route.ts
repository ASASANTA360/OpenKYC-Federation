import { NextResponse } from "next/server";

import { listOrganizations }
from "@/src/federation/registry";

import { trustExchange }
from "@/src/federation/trustExchange";

export async function GET() {

const organizations =
await listOrganizations();

const trust =
await trustExchange();

return NextResponse.json({
organizations,
trust
});

}