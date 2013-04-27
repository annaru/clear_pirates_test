NAME=clear_pirates
ZIP=$(NAME).zip
all: pack
	if [ -f build/$(ZIP) ] ; then \
		rm build/$(ZIP) ; \
	fi ; \
	zip -r $(ZIP) src
	mv -f $(ZIP) build/
pack:
	if [ -f build/$(NAME).pem ]; then \
		google-chrome --pack-extension=src --pack-extension-key=build/$(NAME).pem; \
	else \
		google-chrome --pack-extension=src; \
		mv -f src.pem build/$(NAME).pem ; \
	fi;
	mv -f src.crx build/$(NAME).crx
	
