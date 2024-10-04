import ClassRoom from './0-classroom';

/**
 * Generates an array of {@link ClassRoom}s with a given size.
 * @returns An array of {@link ClassRoom}s.
 */
export default function initializeRooms() {
  const classRooms = [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
  return classRooms;
}
