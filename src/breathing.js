/**
 * Just Breathe - Simple breathing companion
 * Follows Unix philosophy: "Do one thing, and do it well"
 */

class BreathingApp {
    constructor() {
        this.canvas = document.getElementById('breathingCanvas');
        this.ctx = this.canvas.getContext('2d');
        // Use full canvas dimensions for boundless breathing
        this.width = this.canvas.width;  // 1200px
        this.height = this.canvas.height; // 1200px
        
        // Center point in the full canvas space
        this.centerX = this.width / 2;   // 600px
        this.centerY = this.height / 2;  // 600px
        
        // Natural breathing - one continuous, organic flow
        this.cycleDuration = 16000; // 16 seconds for one complete breath
        this.startTime = Date.now();
        this.radius = 60;
        
        this.animate = this.animate.bind(this);
        this.start();
    }
    
    start() {
        try {
            this.animate();
        } catch (error) {
            this.handleError('Failed to start breathing animation', error);
        }
    }
    
    animate() {
        try {
            const elapsed = Date.now() - this.startTime;
            const cycleProgress = (elapsed % this.cycleDuration) / this.cycleDuration;
            
            // Create one continuous, natural breathing curve
            // No sharp transitions - just smooth, organic movement
            this.radius = this.calculateNaturalRadius(cycleProgress);
            
            this.draw();
            requestAnimationFrame(this.animate);
        } catch (error) {
            this.handleError('Animation error', error);
        }
    }
    
    calculateNaturalRadius(progress) {
        // Create a smooth, natural breathing curve using multiple sine waves
        // This mimics the actual rhythm of natural breathing
        const baseRadius = 100;
        const amplitude = 200;
        
        // Primary breathing wave (inhale/exhale)
        const primaryWave = Math.sin(progress * 2 * Math.PI);
        
        // Secondary micro-movements for natural feel
        const microWave1 = Math.sin(progress * 8 * Math.PI) * 0.1;
        const microWave2 = Math.sin(progress * 12 * Math.PI) * 0.05;
        
        // Combine waves for natural, organic movement
        const naturalMovement = primaryWave + microWave1 + microWave2;
        
        // Apply smooth easing and return radius
        return baseRadius + (amplitude * (naturalMovement + 1)) / 2;
    }
    
    draw() {
        try {
            // Clear canvas completely - no background
            this.ctx.clearRect(0, 0, this.width, this.height);
            
            // Use the pre-calculated center points
            const centerX = this.centerX;
            const centerY = this.centerY;
            
            // Create natural breathing circle with organic feel
            this.ctx.save();
            
            // Allow circles to extend beyond canvas boundaries
            this.ctx.globalCompositeOperation = 'source-over';
            
            // Outer aura - extends beyond canvas for natural feel
            this.ctx.globalAlpha = 0.02;
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, this.radius * 2.2, 0, 2 * Math.PI);
            this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            this.ctx.fill();
            
            // Extended glow - goes beyond canvas edges
            this.ctx.globalAlpha = 0.04;
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, this.radius * 1.8, 0, 2 * Math.PI);
            this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            this.ctx.fill();
            
            // Middle glow
            this.ctx.globalAlpha = 0.08;
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, this.radius * 1.4, 0, 2 * Math.PI);
            this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            this.ctx.fill();
            
            // Main breathing circle - natural white
            this.ctx.globalAlpha = 0.4;
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, this.radius, 0, 2 * Math.PI);
            this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            this.ctx.fill();
            
            // Inner core - soft focus
            this.ctx.globalAlpha = 0.7;
            this.ctx.beginPath();
            this.ctx.arc(centerX, centerY, this.radius * 0.4, 0, 2 * Math.PI);
            this.ctx.fillStyle = 'rgba(255, 255, 255, 1)';
            this.ctx.fill();
            
            this.ctx.restore();
            
        } catch (error) {
            this.handleError('Drawing error', error);
        }
    }
    

    
    handleError(message, error) {
        console.error(message, error);
        
        // Graceful degradation - show simple text-based breathing
        this.showTextBasedBreathing();
    }
    
    showTextBasedBreathing() {
        // Fallback to simple text-based breathing
        this.canvas.style.display = 'none';
        
        const fallbackDiv = document.createElement('div');
        fallbackDiv.innerHTML = `
            <div style="text-align: center; padding: 40px; color: rgba(255,255,255,0.9);">
                <div id="breathingDot" style="width: 120px; height: 120px; border-radius: 50%; background: rgba(255,255,255,0.4); margin: 0 auto; transition: all 8s ease-in-out infinite alternate;"></div>
            </div>
        `;
        
        document.querySelector('.breathing-canvas-container').appendChild(fallbackDiv);
        
        // Simple text-based breathing timer
        this.startTextBasedBreathing();
    }
    
    startTextBasedBreathing() {
        // Simple, continuous breathing animation
        // The CSS transition handles the smooth movement automatically
        // No JavaScript timing needed - just pure CSS animation
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    try {
        new BreathingApp();
    } catch (error) {
        console.error('Failed to initialize breathing app:', error);
        
        // Ultimate fallback - show simple message
        document.body.innerHTML = `
            <div style="text-align: center; padding: 50px; font-family: Arial, sans-serif; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; min-height: 100vh; display: flex; align-items: center; justify-content: center;">
                <div>
                    <h1 style="font-size: 3rem; margin-bottom: 2rem;">Just Breathe</h1>
                    <div style="width: 100px; height: 100px; border-radius: 50%; background: rgba(255,255,255,0.3); margin: 0 auto; animation: breathe 8s ease-in-out infinite;"></div>
                    <style>
                        @keyframes breathe {
                            0%, 100% { transform: scale(0.6); opacity: 0.3; }
                            50% { transform: scale(1.4); opacity: 0.7; }
                        }
                    </style>
                </div>
            </div>
        `;
    }
});
