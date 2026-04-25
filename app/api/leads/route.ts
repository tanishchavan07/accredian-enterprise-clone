import { NextRequest, NextResponse } from "next/server";
import { saveLead } from "@/lib/leads";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, company, teamSize, skillArea, message } = body as Record<
      string,
      string
    >;

    // --- Validation ---
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Full name is required (min 2 characters)." },
        { status: 400 }
      );
    }

    if (!email || !EMAIL_REGEX.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: "A valid work email address is required." },
        { status: 400 }
      );
    }

    if (!company || typeof company !== "string" || company.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: "Company name is required." },
        { status: 400 }
      );
    }

    const validTeamSizes = ["10-50", "50-200", "200-500", "500+"];
    if (!teamSize || !validTeamSizes.includes(teamSize)) {
      return NextResponse.json(
        { success: false, error: "Please select a valid team size." },
        { status: 400 }
      );
    }

    const validSkillAreas = [
      "Data Science",
      "Product",
      "Engineering",
      "Leadership",
      "Other",
    ];
    if (!skillArea || !validSkillAreas.includes(skillArea)) {
      return NextResponse.json(
        { success: false, error: "Please select a primary skill area." },
        { status: 400 }
      );
    }

    // --- Save lead ---
    const lead = saveLead({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company.trim(),
      teamSize,
      skillArea,
      message: typeof message === "string" ? message.trim() : "",
    });

    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] New lead captured:`, {
      id: lead.id,
      name: lead.name,
      email: lead.email,
      company: lead.company,
      teamSize: lead.teamSize,
      skillArea: lead.skillArea,
    });

    return NextResponse.json(
      { success: true, message: "Lead captured", leadId: lead.id },
      { status: 200 }
    );
  } catch (err) {
    console.error("[/api/leads] Unexpected error:", err);
    return NextResponse.json(
      { success: false, error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ success: false, error: "Method not allowed" }, { status: 405 });
}
