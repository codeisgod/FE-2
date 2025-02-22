# DOM
- DOM - Document Object Model
    - Document is wrapper for entire HTML
    - Browser start with Windows and Document (HTML Document)
        - Windows
            - Document
                - HTML 
                    - Head
                        - Meta
                        - Link
                        - title
                    - Body
                        - div
                            - div
                                - nav
                        - header etc
                        - script
    - JavaScript Doesn't understand Tree structure it understand Object Structure 
    ```
    Document: {
        HTML: {
            Head: {
                Meta: {}
                Link: {}
                title: {}
            }
            Body: {
                div: {
                    div: {
                        nav: {}
                    }
                }
                header: {}
                script: {}
            }
        }
    }
    ```
    - we are calling **<script src="script_path"></script>** in **body tag** to link JavaScript with HTML at last.