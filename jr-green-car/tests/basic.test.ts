import { describe, it, expect } from 'vitest';
import { greetPassenger, calculateGreenCarFare, GreenCarService } from '../src/index.js';

describe('JR Green Car Functions', () => {
  it('should greet passenger correctly', () => {
    const result = greetPassenger('田中');
    expect(result).toBe('いらっしゃいませ、田中様。グリーン車へようこそ。');
  });

  it('should calculate green car fare correctly', () => {
    const baseFare = 1000;
    const result = calculateGreenCarFare(baseFare);
    expect(result).toBe(1550);
  });

  it('should handle zero base fare', () => {
    const baseFare = 0;
    const result = calculateGreenCarFare(baseFare);
    expect(result).toBe(550);
  });
});

describe('GreenCarService', () => {
  it('should add passenger correctly', () => {
    const service = new GreenCarService();
    service.addPassenger('佐藤');

    expect(service.getPassengerCount()).toBe(1);
    expect(service.getPassengerList()).toContain('佐藤');
  });

  it('should handle multiple passengers', () => {
    const service = new GreenCarService();
    service.addPassenger('田中');
    service.addPassenger('鈴木');
    service.addPassenger('高橋');

    expect(service.getPassengerCount()).toBe(3);
    expect(service.getPassengerList()).toEqual(['田中', '鈴木', '高橋']);
  });

  it('should remove passenger correctly', () => {
    const service = new GreenCarService();
    service.addPassenger('山田');
    service.addPassenger('佐々木');

    const removed = service.removePassenger('山田');
    expect(removed).toBe(true);
    expect(service.getPassengerCount()).toBe(1);
    expect(service.getPassengerList()).toEqual(['佐々木']);
  });

  it('should return false when removing non-existent passenger', () => {
    const service = new GreenCarService();
    const removed = service.removePassenger('存在しない人');
    expect(removed).toBe(false);
    expect(service.getPassengerCount()).toBe(0);
  });
});
