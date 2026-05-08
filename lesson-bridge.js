// lesson-bridge.js - Bridge between app.js lesson data and runner
(function() {
    'use strict';
    
    // This will be populated by app.js when lesson loads
    window.lessonDataBridge = {
        currentLesson: null,
        listeners: [],
        
        setLesson: function(lesson) {
            this.currentLesson = lesson;
            this.listeners.forEach(fn => fn(lesson));
            console.log('[Bridge] Lesson set:', lesson ? lesson.title : 'null');
        },
        
        onLessonChange: function(callback) {
            this.listeners.push(callback);
            // If lesson already set, call immediately
            if (this.currentLesson) {
                callback(this.currentLesson);
            }
        },
        
        getExpectedOutput: function() {
            if (this.currentLesson && this.currentLesson.expectedOutput) {
                return this.currentLesson.expectedOutput;
            }
            return 'Expected output not defined for this lesson.';
        }
    };
    
    // Listen for lesson changes from the main app
    document.addEventListener('lessonLoaded', function(e) {
        if (e.detail && e.detail.lesson) {
            window.lessonDataBridge.setLesson(e.detail.lesson);
        }
    });
    
    // Also try to get from global scope
    if (window.currentLesson) {
        window.lessonDataBridge.setLesson(window.currentLesson);
    }
    
    console.log('[Bridge] Lesson data bridge ready');
})();
