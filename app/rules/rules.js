"use client";
import Link from "next/link";

export default function Rules() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <div className="p-8">
        <h1 className="text-3xl font-bold text-center mb-8">Game Rules</h1>

        {/* Section 1: General Rules */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">General Rules</h2>
          <p className="mb-2">
            1. Each player starts with a set number of cards in their hand.
          </p>
          <p className="mb-2">
            2. Players take turns drawing cards and playing actions.
          </p>
          <p className="mb-2">
            3. The goal is to reduce your opponent's life points to zero.
          </p>
        </section>

        {/* Section 2: Card Types */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Card Types</h2>
          <p className="mb-2">
            1. <strong>Leader Cards:</strong> These represent your main character and have unique abilities.
          </p>
          <p className="mb-2">
            2. <strong>Character Cards:</strong> These are used to attack or defend.
          </p>
          <p className="mb-2">
            3. <strong>Event Cards:</strong> These provide one-time effects when played.
          </p>
          <p className="mb-2">
            4. <strong>Stage Cards:</strong> These provide ongoing effects while in play.
          </p>
        </section>

        {/* Section 3: Turn Phases */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Turn Phases</h2>
          <p className="mb-2">
            1. <strong>Draw Phase:</strong> Draw one card from your deck.
          </p>
          <p className="mb-2">
            2. <strong>Main Phase:</strong> Play cards, attack, or activate abilities.
          </p>
          <p className="mb-2">
            3. <strong>End Phase:</strong> Resolve any end-of-turn effects.
          </p>
        </section>

        {/* Section 4: Winning Conditions */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Winning Conditions</h2>
          <p className="mb-2">
            1. Reduce your opponent's life points to zero.
          </p>
          <p className="mb-2">
            2. Force your opponent to run out of cards in their deck.
          </p>
        </section>

        {/* Section 5: Penalties */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Penalties</h2>
          <p className="mb-2">
            1. Cheating or breaking the rules will result in a warning or disqualification.
          </p>
          <p className="mb-2">
            2. Unsportsmanlike behavior will not be tolerated.
          </p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-4"><Link href="https://app.onepiece-cardgame.com/en/">For more information please see the official tutorial from Bandai by clicking here!</Link></h2>
        </section>
      </div>
    </div>
  );
}