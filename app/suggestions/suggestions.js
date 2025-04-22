"use client";

export default function Suggestions() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Deck Building Suggestions</h1>

        {/* Section 1: Balanced Deck */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Balanced Deck</h2>
          <p className="mb-2">
            A balanced deck includes a mix of offensive and defensive cards. Focus on having:
          </p>
          <ul className="list-disc list-inside">
            <li>Leader cards with versatile abilities.</li>
            <li>Character cards for both attack and defense.</li>
            <li>Event cards to counter your opponent's strategies.</li>
            <li>Stage cards to provide ongoing support.</li>
          </ul>
        </section>

        {/* Section 2: Aggressive Deck */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Aggressive Deck</h2>
          <p className="mb-2">
            An aggressive deck focuses on overwhelming your opponent quickly. Include:
          </p>
          <ul className="list-disc list-inside">
            <li>High-power character cards for strong attacks.</li>
            <li>Event cards that boost attack power or deal direct damage.</li>
            <li>Leader cards with offensive abilities.</li>
          </ul>
        </section>

        {/* Section 3: Defensive Deck */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Defensive Deck</h2>
          <p className="mb-2">
            A defensive deck focuses on stalling your opponent and protecting your life points. Use:
          </p>
          <ul className="list-disc list-inside">
            <li>Character cards with high defense or blocker abilities.</li>
            <li>Event cards that negate attacks or heal damage.</li>
            <li>Stage cards that provide defensive bonuses.</li>
          </ul>
        </section>

        {/* Section 4: Thematic Deck */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Thematic Deck</h2>
          <p className="mb-2">
            Build a deck around a specific theme or character group. Examples include:
          </p>
          <ul className="list-disc list-inside">
            <li>Straw Hat Pirates deck focusing on synergy between crew members.</li>
            <li>Marine deck with cards that boost Navy characters.</li>
            <li>Donquixote Pirates deck with powerful combo abilities.</li>
          </ul>
        </section>

        {/* Section 5: Budget Deck */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Budget Deck</h2>
          <p className="mb-2">
            If you're building a deck on a budget, focus on:
          </p>
          <ul className="list-disc list-inside">
            <li>Common and uncommon cards with strong abilities.</li>
            <li>Cards that synergize well without relying on expensive rares.</li>
            <li>Leader cards that provide consistent value.</li>
          </ul>
        </section>
      </div>
    </div>
  );
}