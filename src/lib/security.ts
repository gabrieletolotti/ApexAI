/**
 * Security utilities for input sanitization and validation
 */

/**
 * Basic input sanitization to prevent XSS attacks
 * Removes potentially dangerous characters and HTML tags
 */

// Helper: Remove 'on*=' event handler attributes robustly
function removeEventHandlers(str: string): string {
  let prev: string;
  do {
    prev = str;
    str = str.replace(/on\w+=/gi, '');
  } while (str !== prev);
  return str;
}

export function sanitizeInput(input: string): string {
  if (!input) return '';
  
  return removeEventHandlers(
    input
      .replace(/[<>]/g, '') // Remove angle brackets
      .replace(/(?:javascript:|data:|vbscript:)/gi, '') // Remove dangerous protocols
  )
    .slice(0, 1000); // Limit length
}

/**
 * Validates email format with basic security checks
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const sanitized = sanitizeInput(email).trim();
  
  return emailRegex.test(sanitized) && 
         sanitized.length <= 254 && // RFC limit
         !sanitized.includes('..'); // Prevent consecutive dots
}

/**
 * Validates phone number format
 */
export function isValidPhone(phone: string): boolean {
  // Accept optional leading + and digits, spaces, dashes, and parentheses
  const phoneRegex = /^\+?[0-9\s\-()]{10,20}$/;
  const sanitized = sanitizeInput(phone);
  return phoneRegex.test(sanitized);
}

/**
 * Rate limiting helper - tracks submission attempts
 */
class RateLimiter {
  private attempts: Map<string, number> = new Map();
  private lastReset: number = Date.now();
  
  canSubmit(identifier: string, maxAttempts: number = 3, windowMs: number = 300000): boolean {
    const now = Date.now();
    
    // Reset if window has passed
    if (now - this.lastReset > windowMs) {
      this.attempts.clear();
      this.lastReset = now;
    }
    
    const currentAttempts = this.attempts.get(identifier) || 0;
    
    if (currentAttempts >= maxAttempts) {
      return false;
    }
    
    this.attempts.set(identifier, currentAttempts + 1);
    return true;
  }
}

export const rateLimiter = new RateLimiter();