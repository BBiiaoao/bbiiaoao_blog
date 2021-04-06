#!/bin/sh
cd E:\\前端\\bbiiaoao_blog\\blog1\\logs
cp access.log $(date +%Y-%m-%d).access.log
echo ''>access.log