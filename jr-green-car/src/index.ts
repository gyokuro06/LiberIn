/**
 * JR Green Car プロジェクトのメインファイル
 */

export function greetPassenger(name: string): string {
  return `いらっしゃいませ、${name}様。グリーン車へようこそ。`;
}

export function calculateGreenCarFare(baseFare: number): number {
  // グリーン車料金の計算（基本料金 + グリーン料金）
  const greenCarSurcharge = 550; // 平日昼間の自由席グリーン料金
  return baseFare + greenCarSurcharge;
}

export class GreenCarService {
  private passengers: string[] = [];

  addPassenger(name: string): void {
    this.passengers.push(name);
    console.log(`${name}様がグリーン車にご乗車されました。`);
  }

  getPassengerCount(): number {
    return this.passengers.length;
  }

  getPassengerList(): string[] {
    return [...this.passengers];
  }

  removePassenger(name: string): boolean {
    const index = this.passengers.indexOf(name);
    if (index > -1) {
      this.passengers.splice(index, 1);
      console.log(`${name}様がグリーン車から降車されました。`);
      return true;
    }
    return false;
  }
}
